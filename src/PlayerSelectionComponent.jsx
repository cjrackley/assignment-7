import { useState } from "react";
import rock from '/public/rock.png'
import paper from '/public/paper.png'
import scissors from '/public/scissors.png'

function ImageSelector({setPlayerChoice}) {
    const [selected, setSelected] = useState(null);

    const images = [
        { "id": "rock", "src": rock },
        { "id": "paper", "src": paper },
        { "id": "scissors", "src": scissors }
    ];

    const handleClick = (id) => {
        setSelected(id);
        setPlayerChoice(id);
    };

    return (
        <div className="choice-block">
            {images.map((img) => (
                <div key={img.id} className={selected === img.id ? "active" : ""}>
                    <button onClick={() => handleClick(img.id)}>
                        <img src={img.src} alt={img.id} />
                    </button>
                </div>
            ))}
        </div>
    );
}
export default ImageSelector;