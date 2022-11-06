import { useState } from "react";
import './about.css'
import rendy from './rendy.jpg'

function About() {
    const [contact, setMe] = useState({
        name: "Rendy Cahya Aditya",
        nim: "320200401023",
        university: "Universitas Pertahanan Republik Indonesia",
        email : "rendycahya18@gmail.com"
    });
    return (
        <>
        <div class="about-section">
            <h1>T<span class="tab"></span>E<span class="tab"></span>N<span class="tab"></span>T<span class="tab"></span>A<span class="tab"></span>N<span class="tab"></span>G</h1>
            <p>Netlab Bookstore adalah toko buku paling lengkap!!!</p>
            <p>Website toko buku ini dibuat untuk kepentingan Tugas Web Development Universitas Indonesia menggunakan React</p>
        </div>
        <br></br>
        <h2>Tentang Saya</h2>
        <div class="row">
            <div class="column">
                <div class="card">
                <img class="rounded mx-auto d-block" src={rendy} alt="Rendy"></img>
                    <div class="container">
                        <h2>{contact.name}</h2>
                        <p>{contact.nim}</p>
                        <p class="title">Mahasiswa Informatika</p>
                        <p>{contact.university}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About
