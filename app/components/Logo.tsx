export default function Logo() {
  return (
    <a className="mr-auto text-xl leading-none text-main" href="/">
      {/* a triangle with svg */}
      <div className="flex items-center gap-2">
        <svg
          viewBox="0 0 100 100"
          height={50}
          width={50}
          className="fill-current"
        >
          <polygon points="50 15, 100 100, 0 100" />
        </svg>

        <span>Esteban.site</span>
      </div>
    </a>
  );
}
