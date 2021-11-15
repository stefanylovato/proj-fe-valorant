import Video from '../Video';
import './style.css';

const Galeria = () => {

    return (
        <section id="galeria">
            <div className="grid">
                <Video url="https://www.youtube.com/embed/k2ZV8ZKTXuo" title="What 2000 hours of Aggressive plays look like on Valorant" />

                <Video url="https://www.youtube.com/embed/PoO7tX5z_EA" title="18 MINUTES OF IMPOSSIBLE 1v5 COMEBACKS" />

                <Video url="https://www.youtube.com/embed/b1mjLTRHjzg" title="SMARTEST MOMENTS IN VALORANT" />
            </div>
        </section>

        

    )

}

export default Galeria;