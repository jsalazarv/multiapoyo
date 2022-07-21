const Layout = (props) => (
    <div>
        <nav>
            Navbar
        </nav>

        { props.children }

        <footer>
            Footer
        </footer>
    </div>
);


export default Layout;

