import React from 'react';
import styles from '../styles/BlogBlock.module.css';
import Link from 'next/link';

const BlogBlock = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={styles.imageOne}>
          <img
            src="https://s3-alpha-sig.figma.com/img/53aa/51b9/9d5b13d904029dc7327e15bc5f7d4ea8?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DMMabqe9AI7sDCRt1eh~rX0XPq0SSqCpjQs2rNW9FOyLmwbqx0-oiaC4bCdXJK0Esq~X6LoLQDTwg6G7YQzRxphFMJMKnMtsYCblQPyKqEUwpbJomhtwrMgmieSpG~MMxW~HhZp7ryjvzZeAgTMfb5cI8Ugef4jU3rdrSdLeC3DsDVUm32FX9v4amadv-JG-mXnVMky551Kdo5H4s8YIOdYHFM8d43NIbUiKuEzYT4v4tr0LpoTb-4vP9JzkszPP22psK9BqKAYvHQ5zayY3LiDLdQELpA5eWAWCX6Ao9bhZRRdBJYQMMgnO7Pc6PH9~KdAOHrmrmdgTi1xofMxrpA__"
            alt="Placeholder"
          />
        </div>
        <div className={styles.imageTwo}>
          <img
            src="https://s3-alpha-sig.figma.com/img/7ddc/f135/1bc2815384bcbd7904fabe82fd0fc9bf?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nQvXrKGq3-jFZzWsTjMCbB63xeJmf0Ksm4VW2Vcjoiv0n5fXQSxvJFVm7OUR~U715WOQqmuxQFEwvpQ-ktXzLNOIx51SoOsTmtTZpqSmBwOtpqg~2lDNVFexXvPD6mWHiAHk3M9sRoax1CA7bmmcBAdSxM5nE4sV3Be8zqy7h7M3HGNfkXN9Ws-THwPizSby4RD9BVtJ6kbAdOHhsCGXn3StbVKtt~~0eR19yO9hzMmSgM91tliuoiujs6hbePxJobTLL8eL1rvAu8Zds3uKhalohN0hLTlx1PVFeQ60zLSjo2hyk3MrBYit4g7KsMyQ5aWQ2jT-aCERPAy~fHyQfA__"
            alt="Placeholder"
          />
        </div>
        <div className={styles.textBlock}>
          <h1>Кажи ги своите мислења и поврзи се со останатите HR ентузијасти</h1>
          <p>
            <span>Во нашиот <strong>блог </strong> од сега ке можеш да разменуваш мислења на актуелни теми со останатите корисници</span>
          </p>
        </div>
        <div className={styles.blogCTA}>
          <Link href="/blogs"><button className={styles.ctaButton}>Нашиот блог</button></Link>
          <div className={styles.ctaText}>Упати се уште сега кон</div>
        </div>
        <div className={styles.imageThree}>
          <img
            src="https://s3-alpha-sig.figma.com/img/7b98/d7d1/d7e11c0026d5644eb8a2028b9fa9ebe3?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=paN6u-ksSm5nYL~9iphkTnIwVtldwCKvGE6VaXetnSpBvyop09sjRcUEcxtlkav4c0~qmlG32xHVG5p1oi62VzyMPpnUszWfTfKCUgOrEzEUQrCKbKRs8-2ZIXc9M3aCrNrM4QB8-eWiToqc6y~LRHqAajgYdpQf5coky279AZOmqUJctu4t2X~f8H1g1QvaS3TY9d-vhOs~RFwh~Zvl1bKyEI6idKsohm6odlOENB3DXbkIs35McUBhD-bZ0WyonK-llbH7FV4DISOIr-gPOE9m-56h1Wma7M47eD0FT84JuJH4CIby8VUDlORLSHsf7xs49fYXNKKsSJuMMtEMPQ__"
            alt="Placeholder"
          />
        </div>
        <img src="/images/group_9200.png" alt="dottedGrid" className={styles.dottedGrid} />
      </div>
    </>
  );
};

export default BlogBlock;
