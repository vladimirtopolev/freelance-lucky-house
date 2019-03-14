import Navigation from '../../models/navigation';

function sendNavigation(response) {
    Navigation
        .find({})
        .sort('leftKey')
        .exec((error, res) => response.json(res));
}

async function fetchNavigation(req, res) {
    return sendNavigation(res);
}

async function insertNavigationItem(req, res) {
    const { item, parentRightKey, parentLevel } = req.body;

    await Navigation.bulkWrite([
        {
            updateMany: {
                filter: {
                    leftKey: { $gt: parentRightKey }
                },
                update: {
                    $inc: {
                        leftKey: 2,
                        rightKey: 2
                    }
                }
            }
        },
        {
            updateMany: {
                filter: {
                    leftKey: { $lt: parentRightKey },
                    rightKey: { $gte: parentRightKey }
                },
                update: {
                    $inc: {
                        rightKey: 2
                    }
                }
            }
        },
        {
            insertOne: {
                document: Object.assign(item, {
                    leftKey: parentRightKey,
                    rightKey: parentRightKey + 1,
                    level: parentLevel + 1
                })
            }
        }
    ]);

    return sendNavigation(res);
}

async function deleteNavigationItem(req, res) {
    const deletedItem = await Navigation.findById(req.params.navigationId);
    if (deletedItem._doc) {
        const { leftKey, rightKey, level } = deletedItem._doc;

        const result = await Navigation.bulkWrite([
            {
                deleteMany: {
                    filter: {
                        leftKey: { $gte: leftKey },
                        rightKey: { $lte: rightKey }
                    }
                }
            },
            {
                updateMany: {
                    filter: {
                        leftKey: { $lt: leftKey },
                        rightKey: { $gt: rightKey }
                    },
                    update: {
                        $inc: {
                            rightKey: leftKey - rightKey - 1
                        }
                    }
                }
            },
            {
                updateMany: {
                    filter: {
                        leftKey: { $gt: rightKey }
                    },
                    update: {
                        $inc: {
                            leftKey: leftKey - rightKey - 1,
                            rightKey: leftKey - rightKey - 1
                        }
                    }
                }
            },
        ]);
    }
    return sendNavigation(res);
}

async function updateNavigationItem(req, res) {
    const itemId = req.params.navigationId;
    const item = req.body;
    await Navigation.findByIdAndUpdate(itemId, item);
    return sendNavigation(res);
}

async function upNavItem(req, res) {
    const itemId = req.params.navigationId;

    const movingItemResult = await Navigation.findById(itemId);
    if (!movingItemResult) {
        return sendNavigation(res);
    }
    const { _doc: movingItem } = movingItemResult;

    const nearestLeftItemResult = await Navigation.findOne({ rightKey: movingItem.leftKey - 1 });
    if (!nearestLeftItemResult) {
        return sendNavigation(res);
    }
    const { _doc: nearestLeftItem } = nearestLeftItemResult;

    const offsetRight = movingItem.rightKey - movingItem.leftKey + 1;
    const offsetLeft = nearestLeftItem.rightKey - nearestLeftItem.leftKey + 1;

    await Navigation.bulkWrite([
        {
            updateMany: {
                filter: {
                    $and: [
                        { leftKey: { $gte: nearestLeftItem.leftKey } },
                        { leftKey: { $lte: nearestLeftItem.rightKey } }
                    ]
                },
                update: {
                    $inc: {
                        leftKey: offsetRight
                    }
                }
            }
        },
        {
            updateMany: {
                filter: {
                    $and: [
                        { rightKey: { $gte: movingItem.leftKey } },
                        { rightKey: { $lte: movingItem.rightKey } }
                    ]
                },
                update: {
                    $inc: {
                        leftKey: -offsetLeft
                    }
                }
            }
        },
        {
            updateMany: {
                filter: {
                    $and: [
                        { rightKey: { $gte: nearestLeftItem.leftKey } },
                        { rightKey: { $lte: nearestLeftItem.rightKey } }
                    ]
                },
                update: {
                    $inc: {
                        rightKey: offsetRight
                    }
                }
            }
        },
        {
            updateMany: {
                filter: {
                    $and: [
                        { leftKey: { $gte: movingItem.leftKey - offsetLeft } },
                        { leftKey: { $lte: nearestLeftItem.rightKey - offsetLeft + offsetRight } }
                    ]
                },
                update: {
                    $inc: {
                        rightKey: -offsetLeft
                    }
                }
            }
        },
    ]);

    return sendNavigation(res);
}

async function downNavItem(req, res) {
    const itemId = req.params.navigationId;

    const movingItemResult = await Navigation.findById(itemId);
    if (!movingItemResult) {
        return sendNavigation(res);
    }
    const { _doc: movingItem } = movingItemResult;

    const nearestRightItemResult = await Navigation.findOne({ leftKey: movingItem.rightKey + 1 });
    if (!nearestRightItemResult) {
        return sendNavigation(res);
    }
    const { _doc: nearestRightItem } = nearestRightItemResult;

    const offsetLeft = movingItem.rightKey - movingItem.leftKey + 1;
    const offsetRight = nearestRightItem.rightKey - nearestRightItem.leftKey + 1;

    await Navigation.bulkWrite([
        {
            updateMany: {
                filter: {
                    $and: [
                        { leftKey: { $gte: movingItem.leftKey } },
                        { leftKey: { $lte: movingItem.rightKey } }
                    ]
                },
                update: {
                    $inc: {
                        leftKey: offsetRight
                    }
                }
            }
        },
        {
            updateMany: {
                filter: {
                    $and: [
                        { rightKey: { $gte: nearestRightItem.leftKey } },
                        { rightKey: { $lte: nearestRightItem.rightKey } }
                    ]
                },
                update: {
                    $inc: {
                        leftKey: -offsetLeft
                    }
                }
            }
        },
        {
            updateMany: {
                filter: {
                    $and: [
                        { rightKey: { $gte: movingItem.leftKey } },
                        { rightKey: { $lte: movingItem.rightKey } }
                    ]
                },
                update: {
                    $inc: {
                        rightKey: offsetRight
                    }
                }
            }
        },
        {
            updateMany: {
                filter: {
                    $and: [
                        { leftKey: { $gte: nearestRightItem.leftKey - offsetLeft } },
                        { leftKey: { $lte: movingItem.rightKey - offsetLeft + offsetRight } }
                    ]
                },
                update: {
                    $inc: {
                        rightKey: -offsetLeft
                    }
                }
            }
        },
    ]);

    return sendNavigation(res);
}

export default (app) => {
    app.route('/api/navigation')
        .get(fetchNavigation)
        .post(insertNavigationItem);

    app.route('/api/navigation/:navigationId')
        .delete(deleteNavigationItem)
        .put(updateNavigationItem);

    app.route('/api/navigation/:navigationId/up')
        .put(upNavItem);

    app.route('/api/navigation/:navigationId/down')
        .put(downNavItem);
}