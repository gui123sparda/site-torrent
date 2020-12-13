import Navbar from "../../components/Navbar";
import Image from 'next/image'

export default function Pc(){
    return(
        <body>
            <header className="header">
                <Navbar></Navbar>
            </header>
            <title>Jogos PC</title>

            <div className="grid-container">
                    <div className="grid-item">
                        <Image src="/cyberpunk2077.jpg" width={400} height={250} layout="responsive"></Image>
                        <h3>Cyberpunk 2077</h3>
                        <div>
                            <a href="magnet:?xt=urn:btih:7F097D5268276A0DF305E8DF6029E92298106B68&dn=Cyberpunk%202077&tr=http%3a%2f%2ftracker2.istole.it%3a60500%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.leechers-paradise.org%3a6969&tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969&tr=http%3a%2f%2fglotorrents.pw%3a80%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337">Magnet-Link</a>
                        </div>
                    </div>
                    <div className="grid-item">
                    <Image src="/cyberpunk2077.jpg" width={400} height={250} layout="responsive"></Image>
                        <h3>Jogo</h3>
                    </div>
                    <div className="grid-item">
                    <Image src="/cyberpunk2077.jpg" width={400} height={250} layout="responsive"></Image>
                        <h3>Jogo</h3>
                    </div>
                    <div className="grid-item">
                    <Image src="/cyberpunk2077.jpg" width={400} height={250} layout="responsive"></Image>
                        <h3>Jogo</h3>
                    </div>
                </div>
        </body>

    );
}