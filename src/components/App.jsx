import React, { Component } from "react";
import axios from "axios";
import { fetchApi } from "./Api";
import { Searchbar } from "./searchbar/Searchbar";
import { ImageGallery } from "./gallery/ImageGallery";
import { ButtonElement } from "./button/Button";
import { Modal } from "./modal/Modal";
import { Loader } from "./loader/Loader";
import Css from "./modal/Modal.module.css";

const API_KEY = "8761127-15c354fd40a23de8d36bfe25d";
const API_URL = "https://pixabay.com/api";
const number = 12;

export class App extends Component
{
    state =
    {
        searchText: '',
        amount: number,
        apiUrl: API_URL,
        apiKey: API_KEY,
        images: [],
        isLoading: false,
        isModal: false,
        error: null,
    };
    componentDidMount = async () =>
    {
        try
        {
            const response = await fetchApi(this.state.apiUrl, this.state.apiKey, this.state.searchText, this.state.amount);
            
            this.setState({ images: response.data.hits });
        }
        catch (error)
        {
            this.setState({ error });
            
            console.log("\nError type - ", error.type);
            console.log("\nError message - ", error.message);
        }
        finally
        {
            this.setState({ isLoading: false });
        }
    }
    handleClickSearch = () =>
    {
        const element = document.querySelector("form");
        const searchElement = element.lastElementChild;

        this.setState({ isLoading: false });

        this.setState(prevState => { return { searchText: searchElement.value, amount: number }}, () =>
        {
            axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&orientation=horizontal&per_page=${this.state.amount}&safesearch=true`)
            
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
    handleClickButtonAmount = () =>
    {
        this.setState(prevState => { return { amount: prevState.amount + 12 }}, () =>
        {
            axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&orientation=horizontal&per_page=${this.state.amount}&safesearch=true`)
            
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
    handleClickModal = (e) =>
    {
        const element = document.querySelector("header");
        const createElement = document.createElement("div");
        const heightContainer = (window.innerHeight - e.target.height) / 5;

        this.onOpenModal(createElement, element);

        setTimeout(() =>
        {
            createElement.innerHTML =

                `<article class=${Css.modal__block}>` +
            
                    `<img class=${Css.modal__image} src=${e.target.src} style="margin-top: ${heightContainer}px;" title=${e.target.title} alt=${e.target.alt}/>` +
            
                "</article>";
        
        }, 100);

        this.onCloseModal(createElement);
    }
    onOpenModal = (modal, element) =>
    {
        modal.classList.add("modal");
        
        element.before(modal);
    }
    onCloseModal = (modal) =>
    {
        window.addEventListener('click', ()=>
        {
            modal.innerHTML = '';
        });
        window.addEventListener('keydown', (e)=>
        {
            if (e.code === 'Escape')
            {
                modal.innerHTML = '';
            }
        });
    }
    onTextChange = () =>
    {
        const element = document.querySelector("form");
        const titleElement = document.querySelector("h2");
        const searchElement = element.lastElementChild;

        titleElement.textContent = '';

        this.setState({ isLoading: true });

        if (searchElement.value === '')
        {
            titleElement.style.height = (window.innerHeight / 6) + 'px';
            titleElement.textContent = 'Fill in the empty columns!';

            this.setState({ isLoading: false, isText: true });
        }
    }
    render()
    {
        const { images, isModal, isLoading, error } = this.state;
        
        return (
            <div>
                {error && <p>Whoops, something went wrong: {error.message}</p>}
                <Searchbar on_submit={this.onTextChange} on_click={this.handleClickSearch}/>
                    {images.length !== 0 ?
                        <main>
                            {images.length !== 0 ?
                                <div>
                                    <ImageGallery data={images} on_click={this.handleClickModal}/>
                                    <ButtonElement on_click={this.handleClickButtonAmount}/>
                                </div>
                                :
                                <h2 style={{ paddingTop: 100, paddingBottom: 40, height: (window.innerHeight / 6), textAlign: 'center', color: 'lightgray' }}>Fill in the empty columns!</h2>
                            }
                        </main>
                        :
                        <h2 style={{ paddingTop: 100, paddingBottom: 40, height: (window.innerHeight / 6), textAlign: 'center', color: 'lightgray' }}>Pictures not found!</h2>
                    }
                    {isModal === true && <Modal src={images.largeImageURL} title={images.user} alt={images.user}/>}
                    {isLoading === true && <Loader/>}
            </div>
        );
    }
}