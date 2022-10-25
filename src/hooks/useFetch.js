import { useEffect, useState } from 'react'

const useFetch = (category) => {
    const [state, setState] = useState({
        data: '',
        loading: true
    })

    const getFetch = async () => {
        setState({
            ...state,
            loading: true
        })

        const url = `https://api.giphy.com/v1/gifs/search?api_key=xwh4Yx7qvFrqwGQ4rfzWuJ2fWQmvqrbT&q=${category}&limit=12`
        const res = await fetch(url);
        const { data } = await res.json();

        const getGifs = data.map((gif) => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }));

        setState({
            data: getGifs,
            loading: false
        })
    }

    useEffect(() => {
        getFetch()
    }, [category])


    return {
        data: state.data,
        loading: state.loading
    };
}

export default useFetch