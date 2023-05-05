import React, { Component } from "react";
import { fetchApi } from "./Api";
import { Searchbar } from "./searchbar/Searchbar";
import { ImageGallery } from "./gallery/ImageGallery";
import { ButtonElement } from "./button/Button";
import { Modal } from "./modal/Modal";
import { Loader } from "./loader/Loader";

const API_KEY = "8761127-15c354fd40a23de8d36bfe25d";
const API_URL = "https://pixabay.com/api";
const number = 12;
let count = 0;

export class App extends Component
{
    state =
    {
        searchText: '',
        amount: number,
        apiUrl: API_URL,
        apiKey: API_KEY,
        images: [],
        srcUrl: '',
        altText: '',
        isLoading: false,
        showModal: false,
        error: null,
    };
    componentDidMount = async () =>
    {
        window.addEventListener('keydown', (e)=>
        {
            if (e.code === 'Escape')
            {
                this.setState({ showModal: false });
            }
        });
        if (count === 0)
        {
            const titleElement = document.querySelector("h2");
            
            titleElement.textContent = '';
        }
    }
    handleClickSearch = (evt) =>
    {
        const element = document.querySelector("form");
        const searchElement = element.lastElementChild;

        evt.preventDefault();

        if (searchElement.value === '')
        {
            this.setState({ images: [] });
        }
        else
        {
            this.setState({ isLoading: false });

            this.setState(() =>
            {
                return { searchText: searchElement.value, amount: number }}, () =>
                {
                    fetchApi(this.state.apiUrl, this.state.apiKey, this.state.searchText, this.state.amount)

                        .then(response => 
                        {
                            this.setState({ images: response.data.hits });
                        })
                        .catch(error =>
                        {
                            this.setState({ error: error.message });

                            console.log('\nError message - ', this.state.error);
                        });
                });
        }
    }
    handleClickButtonAmount = () =>
    {
        this.setState(prevState =>
        {
            return { amount: prevState.amount + number }}, () =>
            {
                fetchApi(this.state.apiUrl, this.state.apiKey, this.state.searchText, this.state.amount)

                    .then(response => 
                    {
                        this.setState({ images: response.data.hits });
                    })
                    .catch(error =>
                    {
                        this.setState({ error: error.message });

                        console.log('\nError message - ', this.state.error);
                    });
            });
    }
    handleClickModal = (evt) =>
    {
        this.setState(() =>
        {
            return { showModal: true, srcUrl: evt.target.src, altText: evt.target.alt }
        });
       this.onOpenModal(evt);
    }
    onTextChange = () =>
    {
        const element = document.querySelector("form");
        const titleElement = document.querySelector("h2");
        const searchElement = element.lastElementChild;

        titleElement.textContent = '';

        this.setState({ isLoading: true });
        
        count++;

        if (searchElement.value === '')
        {
            titleElement.style.height = (window.innerHeight / 6) + 'px';
            titleElement.textContent = 'Fill in the empty columns!';

            this.setState({ isLoading: false });
        }
    }
    onOpenModal = (evt) =>
    {
        this.setState(() =>
        {
            return { showModal: true, imgUrl: evt.target.src, altText: evt.target.alt }
        });
    }
    onCloseModal = () =>
    {
        this.setState({ showModal: false });
    }
    render()
    {
        const { images, showModal, isLoading, error } = this.state;
        
        return (
            <div style={{ paddingBottom: 24, display: 'grid', gridTemplateColumns: '1fr', gridGap: 16 }}>
                {error && <p>Whoops, something went wrong: {error.message}</p>}
                <Searchbar onSubmit={this.handleClickSearch} onChange={this.onTextChange}/>
                {images.length !== 0 ?
                    <main>
                        {images.length !== 0 ?
                            <div>
                                <ImageGallery data={images} onClick={this.handleClickModal}/>
                                <ButtonElement onClick={this.handleClickButtonAmount}/>
                            </div>
                            : <h2 style={{ paddingTop: 70, paddingBottom: 70, height: (window.innerHeight / 6), textAlign: 'center', color: 'lightgray' }}>Fill in the empty columns!</h2>}
                    </main>
                    : <h2 style={{ paddingTop: 70, paddingBottom: 70, height: (window.innerHeight / 6), textAlign: 'center', color: 'lightgray' }}>Pictares not found!</h2>}
                {showModal === true &&
                    <Modal src={this.state.srcUrl} alt={this.state.altText} onClick={this.onCloseModal}/>}
                {isLoading === true && <Loader/>}
            </div>
        );
    }
}