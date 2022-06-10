interface MapLinkProps {
  title: string;
  href: string;
  name: string;
}

const MapLink = ({ title, href, name }: MapLinkProps) => (
  <a
    rel='noopener nofollow noreferrer external'
    target='_blank'
    title={`Get directions to ${title} with ${name}`}
    href={href}>{`Open with ${name}`}</a>
);

export default MapLink;
