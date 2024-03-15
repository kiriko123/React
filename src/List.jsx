import PropsTypes from "prop-types"
function List(props) {
    // eslint-disable-next-line react/prop-types
    const itemList = props.items;
    const category = props.category;
    //fruits.sort((a, b) => a.name.localeCompare(b.name))//ss giam dan
    //fruits.sort((a, b) => b .name.localeCompare(a.name)) //ss giam dan
    //fruits.sort((a,b) => a.calo - b.calo);
    //fruits.sort((a,b) => b.calo - a.calo);

    //const lowCalFruits = fruits.filter(fruits => fruits.calo < 103)
    //const hightCalFruits = fruits.filter(fruits => fruits.calo > 102)
    // eslint-disable-next-line react/jsx-key, react/prop-types
    const listItems = itemList.map((fruit) => (
        <li key={fruit.id}>
            {fruit.name}: &nbsp;
            <b>{fruit.calo}</b>
        </li>
    ));
    return (
        <>
            <h3 className="list-catagory">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    );
}
List.defaultProps ={
    category: "category",
    items: [],
}
List.PropsTypes ={
    category: PropsTypes.string,
    items: PropsTypes.arrayOf(PropsTypes.shape({id:PropsTypes.number, name:PropsTypes.string, calo:PropsTypes.number}))
}
export default List;
