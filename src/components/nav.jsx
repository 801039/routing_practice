import react from 'react';

function Nav() {
    return (
        <nav className="bg-gradient-to-r from-green-700 to-blue-800 ... 
        flex justify-around ... justify-items-center text-white">
            <h3>Logo</h3>
            <ul className="w-3/5 flex justify-around ... justify-items-center list-none">
                <li>About</li>
                <li>Shop</li>
            </ul>
        </nav>
    );
}

export default Nav;
