/** @jsx jsx */
import { React, jsx, css, polished, classNames } from 'jimu-core'
import { useTheme } from 'jimu-theme'
import { Button } from 'jimu-ui'

export enum ShapeType { Circle, Rectangle }

interface ShapesProps {
  title?: string
  className?: string
  type: ShapeType
  active: boolean
  onClick: () => any
}

const useStyle = () => {
  const theme = useTheme()
  const white = theme?.ref.palette.white
  const cyan500 = theme?.sys.color.primary.light
  const gray900 = theme?.ref.palette.neutral[1200]
  return React.useMemo(() => {
    return css`
    background-color: ${white} !important;
    padding: 0px !important;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${polished.rem(28)};
    height: ${polished.rem(28)};
    margin: 2px;
    border-radius: 0px; 
    &.active{
      border: 2px ${cyan500} solid !important;
    }
    .inner {
      width: 66%;
      height: 66%;
      border: 1px ${gray900} solid;
      border-radius: 2px;
      &.circle {
        border-radius: 50%;
    }
    }
  `
  }, [white, cyan500, gray900])
}

export const Shapes = (props: ShapesProps) => {
  const { className, title, type, active, onClick } = props
  const style = useStyle()
  const classes = classNames('shapes', { active: active }, className)

  return <Button
    css={style}
    onClick={onClick}
    title={title}
    aria-label={title}
    aria-pressed={active}
    className={classes}>
    <div className={classNames('inner', { rectangle: type === ShapeType.Rectangle }, { circle: type === ShapeType.Circle })} />
  </Button>
}
