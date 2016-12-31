import {
    Animated,
    Easing
} from 'react-native';

const configureTimingTransition = (transitionProps, previousTransitionProps) => ({
    timing: Animated.timing,
    easing: Easing.inOut(Easing.linear),
    duration: 150,
});

export default FadedZoom = {
    configureTransition: configureTimingTransition,
    sceneAnimations: (props) => {
        const {
            position,
            scene,
        } = props;

        const index = scene.index;
        const inputRange = [index - 1, index, index + 1];

        const opacity = position.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
        });

        const scale = position.interpolate({
            inputRange,
            outputRange: [1.2, 1, 1.2],
        });

        return {
            opacity,
            transform: [
                { translateX: 0 },
                { translateY: 0 },
                { scale: scale },
            ],
        };
    },
    gestures: null,
};