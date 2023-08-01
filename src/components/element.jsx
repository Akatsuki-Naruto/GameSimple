import clsx from "clsx";


export class Red extends Component {
    constructor(props) {}

    render(){
        return(
            <>
                <button id="1" className={clsx(" bg-red-600")}></button>
            </>
        )
    }
}

export class Green extends Component {
    constructor(props) {}

    render(){
        return(
            <>
                <button id="2" className={clsx(" bg-green-600")}></button>
            </>
        )
    }
}

export class Blue extends Component {
    constructor(props) {}

    render(){
        return(
            <>
                <button id="3" className={clsx(" bg-blue-600")}></button>
            </>
        )
    }
}

export class yellow extends Component {
    constructor(props) {}

    render(){
        return(
            <>
                <button id="4" className={clsx(" bg-yellow-500")}></button>
            </>
        )
    }
}

export class orange extends Component {
    constructor(props) {}

    render(){
        return(
            <>
                <button id="5" className={clsx(" bg-orange-600")}></button>
            </>
        )
    }
}