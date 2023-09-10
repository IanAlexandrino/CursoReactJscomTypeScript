import './header.css';

interface HeaderProps{
     title?: string;
}

export function Header({title = "MACACOS ME MORDAM"}: HeaderProps){
    return(
        <header className="header">
            <h1 className="tittle">{title}</h1>
            <hr/>
        </header>
    )
}