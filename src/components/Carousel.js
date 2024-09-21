import React, { useState, useRef, useEffect } from 'react';
import { View, ScrollView, Image, Dimensions, StyleSheet, Text } from 'react-native';

const { width } = Dimensions.get('window');

const imageData = [
    { key: 1, uri: 'https://firebasestorage.googleapis.com/v0/b/petmate-e01d8.appspot.com/o/image1.jpg?alt=media&token=9adae50c-bac7-4329-967f-6c3c6061c3cf' },
    { key: 2, uri: 'https://firebasestorage.googleapis.com/v0/b/petmate-e01d8.appspot.com/o/image9.jpeg?alt=media&token=7d0e9f00-6ec1-4c0a-9178-919dda1cf769' },
    { key: 3, uri: 'https://firebasestorage.googleapis.com/v0/b/petmate-e01d8.appspot.com/o/%20image6.jpeg?alt=media&token=64ae4bff-1ad8-488b-a8c3-f6e293edd6f7' },
];

const CustomCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef();


    useEffect(() => {
        const interval = setInterval(() => {
            // Move to the next image or back to the first
            let nextIndex = activeIndex === imageData.length - 1 ? 0 : activeIndex + 1;
            scrollRef.current?.scrollTo({
                x: nextIndex * width,
                animated: true,
            });
            setActiveIndex(nextIndex);
        }, 2000); // Adjust auto-scroll interval (in milliseconds)

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [activeIndex]);
    // Update active slide index
    const onScroll = (event) => {
        const slideIndex = Math.round(
            event.nativeEvent.contentOffset.x / width
        );
        setActiveIndex(slideIndex);
    };

    const renderDots = () => {
        return (
            <View style={styles.dotContainer}>
                {imageData.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            { backgroundColor: index === activeIndex ? '#000' : '#ccc' },
                        ]}
                    />
                ))}
            </View>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                ref={scrollRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
                scrollEventThrottle={16}
                style={styles.carousel}
            >
                {imageData.map((image, index) => (
                    <Image
                        key={index}
                        source={{ uri: image.uri }}
                        style={styles.image}
                        resizeMode="cover"
                    />
                ))}
            </ScrollView>
            {renderDots()}
        </View>
    );
};

const styles = StyleSheet.create({
    carousel: {
        height: 250,
        borderRadius: 20,
    },
    image: {
        width: width,
    },
    dotContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
});

export default CustomCarousel;
