import styles from '../styles/Rrssb.module.scss';

const Rrssb = () => {
  return (
    <div>
      {/* <!-- Buttons start here. Copy this ul to your document. --> */}
      <ul className={[styles['rrssb-buttons'], styles.clearfix].join(' ')}>
        <li className={styles['rrssb-email']}>
          {/* <!-- Replace subject with your message using URL Encoding: http://meyerweb.com/eric/tools/dencoder/ --> */}
          <a href="mailto:?Subject=your%20subject">
            <span className={styles['rrssb-icon']}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                <path d="M20.11 26.147c-2.335 1.05-4.36 1.4-7.124 1.4C6.524 27.548.84 22.916.84 15.284.84 7.343 6.602.45 15.4.45c6.854 0 11.8 4.7 11.8 11.252 0 5.684-3.193 9.265-7.398 9.3-1.83 0-3.153-.934-3.347-2.997h-.077c-1.208 1.986-2.96 2.997-5.023 2.997-2.532 0-4.36-1.868-4.36-5.062 0-4.75 3.503-9.07 9.11-9.07 1.713 0 3.7.4 4.6.972l-1.17 7.203c-.387 2.298-.115 3.3 1 3.4 1.674 0 3.774-2.102 3.774-6.58 0-5.06-3.27-8.994-9.304-8.994C9.05 2.87 3.83 7.545 3.83 14.97c0 6.5 4.2 10.2 10 10.202 1.987 0 4.09-.43 5.647-1.245l.634 2.22zM16.647 10.1c-.31-.078-.7-.155-1.207-.155-2.572 0-4.596 2.53-4.596 5.53 0 1.5.7 2.4 1.9 2.4 1.44 0 2.96-1.83 3.31-4.088l.592-3.72z" />
              </svg>
            </span>
            <span className={styles['rrssb-text']}>email</span>
          </a>
        </li>
        <li className={styles['rrssb-facebook']}>
          {/* <!--  Replace with your URL. For best results, make sure you page has the proper FB Open Graph tags in header: https://developers.facebook.com/docs/opengraph/howtos/maximizing-distribution-media-content/ --> */}
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=http://your-url-here"
            className="popup"
          >
            <span className={styles['rrssb-icon']}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29">
                <path d="M26.4 0H2.6C1.714 0 0 1.715 0 2.6v23.8c0 .884 1.715 2.6 2.6 2.6h12.393V17.988h-3.996v-3.98h3.997v-3.062c0-3.746 2.835-5.97 6.177-5.97 1.6 0 2.444.173 2.845.226v3.792H21.18c-1.817 0-2.156.9-2.156 2.168v2.847h5.045l-.66 3.978h-4.386V29H26.4c.884 0 2.6-1.716 2.6-2.6V2.6c0-.885-1.716-2.6-2.6-2.6z" />
              </svg>
            </span>
            <span className={styles['rrssb-text']}>facebook</span>
          </a>
        </li>
        <li className={styles['rrssb-twitter']}>
          {/* <!-- Replace href with your Meta and URL information  --> */}
          <a
            href="https://twitter.com/intent/tweet?text=https://rrssb.netlify.com/"
            className="popup"
          >
            <span className={styles['rrssb-icon']}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                <path d="M24.253 8.756C24.69 17.08 18.297 24.182 9.97 24.62a15.093 15.093 0 0 1-8.86-2.32c2.702.18 5.375-.648 7.507-2.32a5.417 5.417 0 0 1-4.49-3.64c.802.13 1.62.077 2.4-.154a5.416 5.416 0 0 1-4.412-5.11 5.43 5.43 0 0 0 2.168.387A5.416 5.416 0 0 1 2.89 4.498a15.09 15.09 0 0 0 10.913 5.573 5.185 5.185 0 0 1 3.434-6.48 5.18 5.18 0 0 1 5.546 1.682 9.076 9.076 0 0 0 3.33-1.317 5.038 5.038 0 0 1-2.4 2.942 9.068 9.068 0 0 0 3.02-.85 5.05 5.05 0 0 1-2.48 2.71z" />
              </svg>
            </span>
            <span className={styles['rrssb-text']}>twitter</span>
          </a>
        </li>
        <li className={styles['rrssb-pinterest']}>
          {/* <!-- Replace href with your Meta and URL information  --> */}
          <a
            href="https://twitter.com/intent/tweet?text=https://rrssb.netlify.com/"
            className="popup"
          >
            <span className={styles['rrssb-icon']}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                <path d="M14.021 1.57C6.96 1.57 1.236 7.293 1.236 14.355S6.96 27.14 14.021 27.14s12.785-5.725 12.785-12.785C26.807 7.294 21.082 1.57 14.021 1.57zm1.24 17.085c-1.161-.09-1.649-.666-2.559-1.219-.501 2.626-1.113 5.145-2.925 6.458-.559-3.971.822-6.951 1.462-10.116-1.093-1.84.132-5.545 2.438-4.632 2.837 1.123-2.458 6.842 1.099 7.557 3.711.744 5.227-6.439 2.925-8.775-3.325-3.374-9.678-.077-8.897 4.754.19 1.178 1.408 1.538.489 3.168-2.128-.472-2.763-2.15-2.682-4.388.131-3.662 3.291-6.227 6.46-6.582 4.007-.448 7.771 1.474 8.29 5.239.579 4.255-1.816 8.865-6.102 8.533l.002.003z" />
              </svg>
            </span>
            <span className={styles['rrssb-text']}>Pinterest</span>
          </a>
        </li>
        <li className={styles['rrssb-pocket']}>
          {/* <!-- Replace href with your Meta and URL information  --> */}
          <a
            href="https://twitter.com/intent/tweet?text=https://rrssb.netlify.com/"
            className="popup"
          >
            <span className={styles['rrssb-icon']}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path d="M28.782.002c2.03.002 3.193 1.119 3.182 3.106-.022 3.569.17 7.159-.158 10.701-1.091 11.772-14.588 18.09-24.599 11.572C2.718 22.457.197 18.312.055 12.936-.035 9.577.006 6.216.03 2.856.04 1.113 1.212.015 3.02.008 7.347-.006 11.678.004 16.006.002c4.258 0 8.518-.004 12.776 0zM8.649 7.856c-1.261.135-1.988.57-2.356 1.476-.392.965-.115 1.81.606 2.496a746.818 746.818 0 0 0 7.399 6.966c1.086 1.003 2.237.99 3.314-.013a700.448 700.448 0 0 0 7.17-6.748c1.203-1.148 1.32-2.468.365-3.426-1.01-1.014-2.302-.933-3.558.245-1.595 1.497-3.22 2.965-4.75 4.526-.705.715-1.119.627-1.782-.034a123.71 123.71 0 0 0-4.93-4.644c-.471-.42-1.123-.647-1.478-.844z" />
              </svg>
            </span>
            <span className={styles['rrssb-text']}>Pocket</span>
          </a>
        </li>
        <li className={styles['rrssb-linkedin']}>
          {/* <!-- Replace href with your Meta and URL information  --> */}
          <a
            href="https://twitter.com/intent/tweet?text=https://rrssb.netlify.com/"
            className="popup"
          >
            <span className={styles['rrssb-icon']}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
                <path d="M25.424 15.887v8.447h-4.896v-7.882c0-1.979-.709-3.331-2.48-3.331-1.354 0-2.158.911-2.514 1.803-.129.315-.162.753-.162 1.194v8.216h-4.899s.066-13.349 0-14.731h4.899v2.088l-.033.048h.033v-.049c.65-1.002 1.812-2.435 4.414-2.435 3.222-.001 5.638 2.106 5.638 6.632zM5.348 2.501c-1.676 0-2.772 1.092-2.772 2.539 0 1.421 1.066 2.538 2.717 2.546h.032c1.709 0 2.771-1.132 2.771-2.546-.042-1.447-1.077-2.539-2.753-2.539h.005zM2.867 24.334h4.897V9.603H2.867v14.731z" />
              </svg>
            </span>
            <span className={styles['rrssb-text']}>Linkedin</span>
          </a>
        </li>
      </ul>
      {/* <!-- Buttons end here --> */}
    </div>
  );
};

export default Rrssb;
