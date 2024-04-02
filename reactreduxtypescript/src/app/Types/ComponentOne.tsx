import './scssExample.scss'

// only to show css "em" effect
export const ComponentOne = () => {
return(
<div className='parentOne'>
    parent
    <div className='childOne'>
    child One
    </div>
    <div className='childTwo'>
    child Two
    </div>
</div>
)
}