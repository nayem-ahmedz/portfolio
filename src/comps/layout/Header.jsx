import Nav from './Nav';

function Header(){
    return(
        <header>
            <section className='container header-content'>
                <h1 className='brand'>Nayem's Space</h1>
                <Nav />
            </section>
        </header>
    );
}

export default Header;