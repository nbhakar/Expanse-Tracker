import "./ExpanseFilter.css"

function ExpanseFilter(prop){

    function updateYearHandler(event){
        prop.onChangeFilter(event.target.value)
    }
    return(
        <div className="filter-box">
            <label>Filter by year</label>
            <select value={prop.selected} onChange={updateYearHandler}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
    )
}

export default ExpanseFilter;