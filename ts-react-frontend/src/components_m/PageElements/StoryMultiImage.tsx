import React, { Fragment } from 'react';
import StoryImage, { IStoryImageProps } from './StoryImage';

interface IStoryMultiImageProps {
    elements: IStoryImageProps[],
    title?: string
}

const StoryMultiImage: React.FC<IStoryMultiImageProps> = (props: IStoryMultiImageProps) => {
    return (
        <div className="story-multi-image">
            <div className="story-multi-image-content">
                {props.elements.map((value: IStoryImageProps, index: number) =>
                    <StoryImage src={value.src} title={value.title} alt={value.alt} key={index} />)}
            </div>
            {props.title ? <div className="media-title">{props.title}</div> : <Fragment />}
        </div>
    );
}

export default StoryMultiImage;