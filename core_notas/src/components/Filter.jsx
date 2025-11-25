const Filter = ({filter,setFilter}) => {
    return (
        <select className="form-select" name="filter" id="priority" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="---">---</option>
            <option value="Todas">Todas</option>
            <option value="Mas recientes">Mas recientes</option>
            <option value="Mas reelevantes">Mas reelevantes</option>
        </select>
    ) 
}
export default Filter ;
