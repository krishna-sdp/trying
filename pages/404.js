import Link from "next/link";

export default function FourOhFour() {
  return (
    <>
      <section className="main-404">
        <div className="container-404">
          <div className="avatar-astro">
            {/* <a href="https://codepen.io/MarioDesigns/"> */}
            <img src="/assets/images/404/astronault-min.png" alt="Skytsunami" />
            {/* </a> */}
          </div>
          <div className="content-404">
            <h1 className="header-404">"Houston, we have a problem"</h1>
            <p className="p-404">404 Page Not Found</p>
            {/* <Link > */}
            <Link href="/">
              <a>
                <button className="button-404 pointer" >Back to Home</button>
              </a>
            </Link>

            {/* </Link> */}
          </div>
        </div>
      </section>
    </>
  );
}
