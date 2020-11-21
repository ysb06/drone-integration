declare module 'react-naver-maps' {
    export const RenderAfterNavermapsLoaded: React.FC<RenderAfterNavermapsLoadedProps>;
    export const NaverMap: React.FC<NaverMapProps>;

    interface RenderAfterNavermapsLoadedProps {
        ncpClientId: string,
        error: JSX.Element,
        loading: JSX.Element
    }

    interface NaverMapProps {
        id: string,
        style?: React.CSSProperties,
        center: {
            lat: number,
            lng: number
        }
        defaultZoom?: number
    }
}