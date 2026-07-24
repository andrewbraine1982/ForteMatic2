"use client";

type HeaderProps = {
  amazonStoreUrl: string;
};

export default function Header({ amazonStoreUrl }: HeaderProps) {
  return (
    <header className="header">
      <a className="logo" href="/">
        ForteMatic<span className="registeredMark">®</span>
      </a>

      <nav className="nav">
        <a href="#goals">Health Goals</a>
        <a href="#products">Products</a>
        <a href="#reviews">Reviews</a>
        <a href="#faq">FAQ</a>
      </nav>

      <a
        className="navButton"
        href={amazonStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Shop Now
      </a>
    </header>
  );
}
