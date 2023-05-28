import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Header } from '../../components/navbar';
import { useLocation } from 'react-router-dom/dist';
import { useDispatch} from 'react-redux';
import { updateListTitle} from '../../redux/actions/action';
import Footer from '../../components/footer';
import './style.css';
import {
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon
} from "react-share";

export const ListPageDetail = () => {
    const [editedTitle, setEditedTitle] = useState('');
    const [algoApiData, setAlgoApiData] = useState({})
    const [isEditing, setIsEditing] = useState(false);
    let { id } = useParams();
    const dispatch = useDispatch();
    const location = useLocation()

    useEffect(() => {
        fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
            .then(res => res.json())
            .then(data => {
                setAlgoApiData(data)
                setEditedTitle(data.title);
            })
    }, [id])

    const handleTitleChange = (event) => {
        setEditedTitle(event.target.value);
    };

    const handleTitleSave = () => {
        // setAlgoApiData(prevData => ({
        //     ...prevData,
        //     title: editedTitle
        // }));
        // dispatch(updateListTitle(id, editedTitle));
        setAlgoApiData(prevData => ({
            ...prevData,
            title: editedTitle
        }));
        dispatch(updateListTitle(id, editedTitle));
        setIsEditing(false);
    };

    const handleEditTitle = () => {
        setEditedTitle(algoApiData.title);
        setIsEditing(true);
    };


    // {algoApiData ? <h1 className="list-page__title">{algoApiData.title}</h1> : null}
    //
    return (
        <>
            <Header />
            <div className="list-page">
                {isEditing ? (
                    <input
                        className="edit-title-input"
                        type="text"
                        value={editedTitle}
                        onChange={handleTitleChange}
                    />
                ) : (
                    <h1 className="list-page__title">{algoApiData.title}</h1>
                )}
                {isEditing ? (
                    <button className="list-btn" onClick={handleTitleSave}>
                        Save Title
                    </button>
                ) : (
                    <button
                        className="list-btn"
                        onClick={handleEditTitle}
                    >
                        Edit Title
                    </button>
                )}
                <ul>
                    <a href={`https://api.whatsapp.com/send?text=https://redux-movie-organizer.netlify.app${location.pathname}`}
                        target={"_blank"} rel="noreferrer">
                        <li><WhatsappIcon size={50} round={true} /></li>
                    </a>
                    <a href={`https://t.me/share?url=https://redux-movie-organizer.netlify.app${location.pathname}`}
                        target={"_blank"} rel="noreferrer">
                        <li><TelegramIcon size={50} round={true} /></li>
                    </a>
                    <a href={`https://twitter.com/intent/tweet?url=https://redux-movie-organizer.netlify.app${location.pathname}&text=Movie Organizer`}
                        target={"_blank"} rel="noreferrer">
                        <li><TwitterIcon size={50} round={true} /></li>
                    </a>
                </ul>
                <div className="row">
                    {algoApiData.movies?.map((item) => (
                        <div className='list-movie-item' key={item.imdbID}>
                            {item.Poster === "N/A" ? <img src="https://media.comicbook.com/files/img/default-movie.png"
                                alt={item.Title} />
                                : <img src={item.Poster} alt={item.Title} />}
                            <Link to={`/movie/${item.imdbID}/`}>{item.Title}</Link>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}
