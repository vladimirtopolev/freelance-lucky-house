import React, { Component } from 'react';
import { Modal } from 'reactstrap';
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop from 'react-image-crop';

import styles from './SingleImageModal.module.scss';
import commonStyles from '../../common.module.scss';

export default class ImageModal extends Component {

    initState = {
        previewChosen: false,
        previewImage: null,
        crop: {
            aspect: 1,
            width: 50
        }
    };

    state = this.initState;

    componentDidMount() {
        this.setState({
            crop: {
                ...this.state.crop,
                aspect: this.props.imageAspect
            }
        });
    }


    changePreview = (e) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            this.setState({ previewImage: event.target.result });
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    changePreviewButton(title) {
        return (
            <div className={commonStyles.inputFileBtn}>
                <input type="file" onChange={this.changePreview}/>
                {title}
            </div>
        );
    }

    saveImage = (e) => {
        this.props.saveImage(this.state.croppedImage);
        this.props.toggle();
    };

    getCroppedImage(pixelCrop) {
        const canvas = document.createElement('canvas');
        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(
            this.imageRef,
            pixelCrop.x,
            pixelCrop.y,
            pixelCrop.width,
            pixelCrop.height,
            0,
            0,
            pixelCrop.width,
            pixelCrop.height
        );

        canvas.toBlob(blob => {
            blob.name = 'crop.img';
            blob.lastModifiedDate = new Date();
            this.setState({croppedImage: [blob]})
        }, 'image/jpeg');
    }

    onImageLoaded = (image, pixelCrop) => {
        this.imageRef = image;
    };

    onCropComplete = (crop, pixelCrop) => {
        this.getCroppedImage(pixelCrop);
    };

    render() {
        const { isOpen, toggle } = this.props;
        const { previewImage, crop } = this.state;
        return (
            <Modal isOpen={isOpen}
                   size={'lg'}
                   toggle={toggle}
                   className={styles.ImageModal}
                   onClosed={() => {
                       this.setState(this.initState)
                   }}
            >
                <div className={styles.ImageModal__title}>
                    Редактирование изображения
                </div>
                <div className={styles.ImageModal__content}>


                    {!previewImage && (
                        <div className={styles.ImageModal__dropAreaWrapper}>
                            <div className={styles.ImageModal__dropArea}>
                                {this.changePreviewButton('Выбрать изображение')}
                            </div>
                        </div>
                    )}
                    {previewImage &&
                    <ReactCrop
                        src={previewImage}
                        onChange={(crop) => {
                            this.setState({ crop });
                        }}
                        crop={crop}
                        onComplete={this.onCropComplete}
                        onImageLoaded={this.onImageLoaded}
                        keepSelection={true}
                        imageStyle={{ width: '100%', maxHeight: 'none' }}
                        className={styles.ImageModal__previewContainer}
                    />}
                </div>
                <div className={styles.ImageModal__buttons}>
                    {previewImage && this.changePreviewButton('Изменить изображение')}
                    {previewImage && <button className={commonStyles.button} onClick={this.saveImage}>Сохранить</button>}
                    <button onClick={e => toggle()} className={commonStyles.button}>Отменить</button>
                </div>
            </Modal>
        );
    }
}