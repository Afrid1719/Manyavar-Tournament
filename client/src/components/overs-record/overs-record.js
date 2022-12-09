
export default function OversRecord({over}) {
    if(!!over) {
        let balls = over.map((item, i) => {
            return (<div className="ball" key={i}><Ball value={item} /></div>)
        });

        return (
            <>
                {balls}
            </>
        );
    }
}

function Ball({value}) {
    return (
        <input type="text" value={value} disabled />
    );
}