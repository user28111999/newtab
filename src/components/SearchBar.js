import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 12px;

        input {
            padding: 8px 12px;
            outline: none;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
`;

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const searchEngines = ['duckduckgo', 'google', 'youtube'];

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            let query = searchQuery.trim();
            let selectedEngine = 'default';

            if (query.startsWith('@')) {
                const engine = query.split(' ')[0].substring(1);
                if (searchEngines.includes(engine)) {
                    selectedEngine = engine;
                    query = query.substring(engine.length + 2);
                }
            }

            if (query !== '') {
                const searchUrl = getSearchUrl(selectedEngine, query);
                window.open(searchUrl, '_blank');
            }
        }
    };

    const getSearchUrl = (engine, query) => {
        switch (engine) {
            case 'duckduckgo':
                return `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
            case 'google':
                return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            case 'youtube':
                return `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
            default:
                return `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);

        if (value.startsWith('@')) {
            const engine = value.split(' ')[0].substring(1);
            if (searchEngines.includes(engine)) {
                const query = value.substring(engine.length + 2);
                // Fetch suggestions for the selected search engine and query
                fetchSuggestions(engine, query);
            }
        } else {
            // Fetch suggestions for the default search engine and query
            fetchSuggestions('default', value);
        }
    };

    const fetchSuggestions = (engine, query) => {
        // todos:
        // fetch suggestions for the given search engine and query
        // need to update the suggestions state

        // try {
        //     let apiUrl = ""

        //     switch (engine) {
        //         case 'duckduckgo':
        //             apiUrl = `https://duckduckgo.com/ac/?q=${encodeURIComponent(query)}`;
        //             break;
        //         case 'google':
        //             apiUrl = `https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(query)}`;
        //             break;
        //         case 'youtube':
        //             apiUrl = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(query)}`;
        //             break;
        //         default:
        //             apiUrl = `https://duckduckgo.com/ac/?q=${encodeURIComponent(query)}`;
        //             break;
        //     }
        // } catch {
        //     console.log("Error fetching suggestions")
        // }
    };

    return (
        <SearchContainer>
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleSearch}
            />

            {suggestions.length > 0 && (
                <ul>
                    {suggestions.map((suggestion, index) => (
                        <li key={index}>{suggestion}</li>
                    ))}
                </ul>
            )}
        </SearchContainer>
    );
};

export default SearchBar;
