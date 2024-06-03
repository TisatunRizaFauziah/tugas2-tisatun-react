/* eslint-disable react/prop-types */
import {BadgeInfo} from "lucide-react"
import {HeartHandshake} from "lucide-react"
import {MessageCircleMore} from "lucide-react"

export default function Card({ cardProps }) {
    const showAlert = (name) => {
        alert(`Sampurasun amang ${name}`);
    };

    const showInfo = () => {
        const { name, age, born, address, hobby } = cardProps;
        alert(`Name: ${name}\n\nAge: ${age}\n\nBorn: ${born}\n\nAddress: ${address}\n\nHobby: ${hobby.join(', ')}`);
    };

    const addComment = () => {
        const comment = prompt("Enter You Comment :");
        if (comment !== null && comment.trim() !== "") {
            alert(`Comment Added :"${comment}"`);
        } else {
            alert("Comment cannot be empty");
        }
    };

    return (
        <div className="container">
            <div className="conatiner-luar">
                <div className="container-dalam">
                    <img src={cardProps.image} alt="" />
                    <p>{cardProps.name}</p>
                    <button onClick={() => showAlert(cardProps.name)}><HeartHandshake /></button>
                    <button onClick={() => showInfo()}><BadgeInfo /></button>
                    <button onClick={addComment}><MessageCircleMore /></button>
                </div>
            </div>
        </div>
      
    );
}
