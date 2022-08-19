import styled from 'styled-components';
type ContainerProps = {
  direction?: 'row' | 'column';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  align?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  gap?: string;
};
export const Container = styled.div`
  display: flex;
  flex-direction: ${(props: ContainerProps) => props.direction || 'row'};
  gap: ${(props: ContainerProps) => props.gap || '0'};
  justify-content: ${(props: ContainerProps) => props.justify || 'none'};
  align-items: ${(props: ContainerProps) => props.align || 'none'};
`;

type PaneProps = {
  bgColor?: string;
  color?: string;
  overflow?: string;
  padding?: string;
  flex?: string;
  height?: string;
  zIndex?: string;
};

export const Pane = styled.div`
  flex: ${(props: PaneProps) => props.flex || '0 1 auto'};
  height: ${(props: PaneProps) => props.height || 'auto'};
  background-color: ${(props: PaneProps) => props.bgColor || '#fff'};
  color: ${(props: PaneProps) => props.color || '#000'};
  overflow: ${(props: PaneProps) => props.overflow || 'hidden'};
  padding: ${(props: PaneProps) => props.padding || '0'};
  z-index: ${(props: PaneProps) => props.zIndex || '0'};
`;
