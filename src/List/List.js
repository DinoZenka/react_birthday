import s from './List.module.css';

let User = (props) => {
    return (
        <div className={s.user}>
            <div className={s.user_img}>
                <img src={props.info.img} ></img>
            </div>
            <div className={s.user_info}>
                <h2 className={s.user_name}>{props.info.name}</h2>
                <h3 className={s.user_age}>{props.info.age} years</h3>
            </div>
            <button className={s.user_delete} onClick={() => { props.delPerson(props.info.id) }}>X</button>
        </div>
    )
}

let List = ({ people, setPeople }) => {

    let delPerson = (id) => {
        const arr = people.filter(elem => elem.id !== id);
        setPeople(arr)
    }
    return (
        <>
            {people.map(elem => {
                return (
                    <User info={elem} key={elem.id} delPerson={delPerson}></User>
                )
            })}
        </>
    )
}

export default List;