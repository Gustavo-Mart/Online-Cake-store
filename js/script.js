let currentIndex = 0;
    const images = [
        "/imgs/bolochoc.jpg",
        "/imgs/bolodeco.jpg",
        "/imgs/cup.jpg",
        "/imgs/boloroxo.jpg"
    ];
    const sliderImage = document.getElementById("slider-image");

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        gsap.to(sliderImage, {
            opacity: 0,
            duration: 0.2,
            onComplete: function() {
                sliderImage.src = images[currentIndex];
                gsap.to(sliderImage, {
                    opacity: 1,
                    duration: 1
                });
            }
        });
    }

    setInterval(nextSlide, 3000);