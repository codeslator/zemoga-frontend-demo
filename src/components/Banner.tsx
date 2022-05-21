import { FC, MouseEventHandler } from 'react';
import BgPeople from '../assets/img/bg-people.@2x.png';

interface BannerProps {
  type: 'top' | 'bottom';
  hairline?: string;
  title: string;
  text?: string;
  enableBackgroundImg?: boolean;
  callToActionText?: string;
  onClick?: () => void | MouseEventHandler;
  onClose?: () => void | MouseEventHandler;
}

const Banner: FC<BannerProps> = ({ type, title, text, hairline, enableBackgroundImg, callToActionText, onClick, onClose }) => {
  return (
    <aside className={`banner ${(type === 'top') ? 'banner-top' : 'banner-bottom'}`} role="doc-tip" aria-label={title}>
      {enableBackgroundImg && (
        <img
          className="banner__background"
          src={BgPeople}
          alt={title}
          role="none" />
      )}
      <div className="banner__left">
        {(type === 'top') ? (
          <>
            {Boolean(hairline) && (<span className="banner__hairline">{hairline}</span>)}
            <span className="banner__title">{title}</span>
          </>
        ) : (
          <h2 className="banner__heading">{title}</h2>
        )}
      </div>
      <div className="banner__right">
        {(type === 'top') ? (
          <p className="banner__text">{text}</p>
        ) : (
          <>
            {Boolean(callToActionText) && (
              <button type="button" className="banner__cta" onClick={Boolean(onClick) ? onClick : undefined}>
                {callToActionText}
              </button>
            )}
          </>
        )}
      </div>
      {Boolean(onClose) && (
        <button type="button" className="icon-button" aria-label="close" onClick={Boolean(onClose) ? onClose : undefined}>
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" stroke-width="2" fill="none" fill-rule="evenodd"><path d="M1 19L19 1M1 1l18 18" /></g></svg>
        </button>
      )}
    </aside>
  )
}

export default Banner