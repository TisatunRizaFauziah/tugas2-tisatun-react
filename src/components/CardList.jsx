import Card from "./Card";

export default function CardList() {
    const biodata = [
        {
            id: 1,
            image:"/abe.jpg",
            name: "Dmitriev Abraham",
            born: "02 januari 2019",
            age: 5,
            address: "Malang",
            hobby: ["cooking", "reading", "singing"]
        },
        {
            id: 2,
            image:"/cipung.jpeg",
            name: "Rayyanza malik Ahmad",
            born: "06 November 2021",
            age: 3,
            address: "Jakarta Pusat",
            hobby: ["cooking", "reading", "singing"]
        },
        {
            id: 3,
            image:"/fatih.jpg",
            name: "Muhammad Leslar Al-Fatih Billar",
            born: "26 Desember 2021",
            age: 3,
            address: "Jakarta",
            hobby: ["Playing", "reading", "singing"]
        },
    ];

    return (
        <>
            {biodata.map((data) => (
                <Card key={data.id} cardProps={data} />
            ))}
        </>
    );
}
