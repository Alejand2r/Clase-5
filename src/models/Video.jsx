import { VideoTexture } from 'three';

export default function Video(props) {
    const video = document.createElement('video');
    video.src = '/static/she.mp4';
    video.crossOrigin = 'anonymous';
    video.loop = true;
    video.muted = false;
    video.pause();

    const videoTexture = new VideoTexture(video);

    const onHandleVid = (event) => {
        video.play(); // 
    };

    return (
        <group {...props} dispose={null} onPointerUp={onHandleVid}>
            <mesh>
                <planeGeometry args={[12.80, 7.20]} />  
                <meshBasicMaterial map={videoTexture} opacity={3}/>
            </mesh>
        </group>
    );
}