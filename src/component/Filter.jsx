import React, { useState } from 'react';
import './Style.css';

const Filter = ({ filter, setfilter }) => {
    const [filterCategory, setFilterCategory] = useState('');
    const [filterPriority, setFilterPriority] = useState('');

    function handleSubmitFilter(e) {
        e.preventDefault();

        setfilter({
            category: filterCategory,
            priority: filterPriority,
        });
    }

    function clearFilter() {
        setfilter({ category: '', priority: '' });
        setFilterCategory('');
        setFilterPriority('');
    }

    return (
        <div className="filter">
            <form onSubmit={handleSubmitFilter}>
                <h2>Filter:</h2>
                <div className="options">
                    <select
                        name="category"
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                    >
                        <option value="">Category</option>
                        <option value="study">Study</option>
                        <option value="work">Work</option>
                        <option value="personal">Personal</option>
                    </select>

                    <select
                        name="priority"
                        value={filterPriority}
                        onChange={(e) => setFilterPriority(e.target.value)}
                    >
                        <option value="">Status</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>

                    <button type="submit" className="filter-btn">Apply Filter</button>
                    <button type="button" className="clear-btn" onClick={clearFilter}>Clear</button>
                </div>
            </form>
        </div>
    );
};

export default Filter;
