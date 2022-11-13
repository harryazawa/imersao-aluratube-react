import config from "../config.json";
import styled from "styled-components";
import {CSSReset} from "../src/components/CSSReset";
import Menu from "../src/components/Menu";


function HomePage(){
    const homePageStyles = {
        // backgroundColor: "red"
        };

    return (
        <>
            <CSSReset />
            <div style={homePageStyles}>
            <Menu />
            <Header />
            <Timeline playlists={config.playlists} />
        </div>
        </>
    );
}

export default HomePage

/* function Menu(){
    return (
        <div>
            Menu
        </div>
    )
} */

const StyledHeader = styled.div`
  img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  
  .user-info{
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

function Header(){
    return (
        <StyledHeader>

            <section className="user-info">
                {/* <img src="banner" /> */}
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function Timeline(props){
    const playlistNames = Object.keys(props.playlists);

    return (
        <div>
            {playlistNames.map((playListName) => {
                const videos = props.playlists[playListName];
                console.log(playListName);
                console.log(videos);
                return (
                    <section>
                        <h2>{playListName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb}/>
                                        <span>
                        {videos.title}
                            </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </div>
    )
}