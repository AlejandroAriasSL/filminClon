import { useRef, useState, useEffect } from "react";
import { Box, IconButton, Card, CardContent, Typography } from "@mui/material";

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useMovies } from "../../hooks/useMovies";

const Slider = (props) => {
    
    const containerRef = useRef(null);
    const results = useMovies(props.page);
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalPages = results.length;

    const scrollToIndex = (index) => {
        const { current } = containerRef;
        if (current) {
            const scrollAmount = index * current.offsetWidth;
            current.scrollTo({ left: scrollAmount, behavior: "smooth" });
            setCurrentIndex(index);
        }
    };

    const scroll = (direction) => {
        let newIndex = currentIndex;
        if (direction === "left") {
            newIndex = Math.max(0, currentIndex - 1);
        } else {
            newIndex = Math.min(totalPages - 1, currentIndex + 1);
        }
        scrollToIndex(newIndex);
    };

    useEffect(() => {
        scrollToIndex(currentIndex);
    }, [currentIndex]);

    return (
        <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
            <Typography
                variant="h4"
                sx={{
                    marginBottom: 2,
                    marginLeft: 2,
                    marginTop: 2,
                    fontWeight: "bold",
                    color: "#FFFFFF",
                    textAlign: "left",
                    fontSize: "24px",
                    letterSpacing: "2px",
                }}
            >
                Titulo
            </Typography>

            {currentIndex > 0 && (
                <IconButton
                    onClick={() => scroll("left")}
                    sx={{

                        position: "absolute",
                        top: "60%",
                        left: 0,
                        zIndex: 2,
                        transform: "translateY(-50%)",
                        backgroundColor: "transparent",
                        "&:focus, &:active": {
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            outline: "none",
                        },
                    }}
                >
                    <NavigateBeforeIcon sx={{ color: "#A9A8A8CC", sizeObject: "24px", fontSize: "80px" }} />
                </IconButton>
            )}

            <Box
                ref={containerRef}
                sx={{

                    display: "flex",
                    overflow: "hidden",
                    scrollBehavior: "smooth",
                    gap: "0px",
                    padding: 0,
                }}
            >

                {results.map((item, index) => (
                    <Card
                        key={index}
                        sx={{
                            minWidth: "100%",
                            minHeight: "100vh",
                            position: "relative",
                            top: 0,
                            flex: "0 0 100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 2,
                            overflow: "hidden",
                            borderImageSource: "20px linear-gradient(to right, #0000FF, #00FFFF)",
                            borderImageSlice: 1,
                            backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.poster_path})`,
                            backgroundSize: "cover ",
                            backgroundPosition: "center",
                        }}
                    >


                        <Box
                        
                            sx={{
                                width: "100%",
                                height: "100%",
                                backgroundColor: "gradient (rgb(10, 10, 51),rgba(0,0,0,0.5))",
                                backgroundSize: "contain",
                                backgroundPosition: "bottom",
                            }}
                        ></Box>


                        <CardContent
                            sx={{
                                position: "absolute",
                                bottom: "0px",
                                width: "100%",
                                backgroundColor: "rgba(0, 0, 0, 0.26)",
                                color: "white",
                                textAlign: "start",
                                padding: "60px ",
                            }}
                        >


                            <Typography variant="h3" sx={{ color: "rgba(241, 241, 243, 0.89)", padding: "0px", marginLeft: "80px" }} >{item.title}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>

            {currentIndex < totalPages - 1 && (
                <IconButton
                    onClick={() => scroll("right")}
                    sx={{
                        position: "absolute",
                        top: "60%",
                        right: 0,
                        zIndex: 2,
                        transform: "translateY(-50%)",
                        backgroundColor: "transparent",
                        "&:focus, &:active": {
                            backgroundColor: "transparent",
                            boxShadow: "none",
                            outline: "none",
                        },
                    }}
                >
                    <NavigateNextIcon sx={{ color: "#A9A8A8CC", sizeObject: "24px", fontSize: "80px" }} />
                </IconButton>
            )}

            <Box
                sx={{
                    top: "90%",
                    display: "flex",
                    justifyContent: "center",
                    gap: 3,
                    position: "absolute",
                    bottom: 16,
                    width: "100%",
                    zIndex: 4,
                }}
            >
                {Array.from({ length: totalPages }).map((_, index) => (
                    <Box
                        key={index}
                        onClick={() => scrollToIndex(index)}
                        sx={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            backgroundColor: index === currentIndex ? "#FFFFFF" : "#A9A8A8CC",
                            cursor: "pointer",
                            transition: "background-color 0.3s",
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Slider;
