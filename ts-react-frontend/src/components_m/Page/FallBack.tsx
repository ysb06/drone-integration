import React from 'react';
import './FallBack.css';

const FallBack: React.FC = () => {
    return (
        <main id="page-fallback">
            <div className="fallback-message">
                <p>해당 페이지를 찾을 수 없습니다</p>
                <a href="/">[홈으로]</a>
            </div>
        </main>
    );
}

export default FallBack;