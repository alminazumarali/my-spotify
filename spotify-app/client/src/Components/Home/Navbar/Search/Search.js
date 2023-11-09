import React,{useState,useEffect} from 'react';
function Search(){
    const [imageSrc, setImageSrc] = useState(null);
    useEffect(() => {
        const imageUrl = 'http://192.168.1.122:8081/image/white_notification.png';
    
        fetch(imageUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'image/png',
            },
            })
            .then((response) => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.blob();
            })
            .then((blob) => {
                const imageUrl = URL.createObjectURL(blob);
                setImageSrc(imageUrl);
            })
            .catch((error) => {
                console.error('Error fetching image:', error);
            });
        }, []);
    return(
        <div>
            <div>
                <img src={imageSrc} alt="photo-image"/>
            </div>
        </div>
    )
}
export default Search;
