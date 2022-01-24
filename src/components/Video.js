function Video() {
    return (
        <div className="video">
            <video id="background-video" autoPlay loop muted>
                    <source src='https://res.cloudinary.com/dhbumhhh1/video/upload/v1642984071/background_m26pfs.mp4' type="video/mp4" />
            </video>
        </div>
    )
}

export default Video;