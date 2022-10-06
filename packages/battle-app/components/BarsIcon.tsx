interface BarsIconProps
{
    size?:string;
}

export function BarsIcon({
    size='20px'
}:BarsIconProps)
{
    return (
        <svg className="svg-icon" style={{width:size,height:size}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M0 88C0 74.75 10.75 64 24 64H424C437.3 64 448 74.75 448 88C448 101.3 437.3 112 424 112H24C10.75 112 0 101.3 0 88zM64 248C64 234.7 74.75 224 88 224H488C501.3 224 512 234.7 512 248C512 261.3 501.3 272 488 272H88C74.75 272 64 261.3 64 248zM424 432H24C10.75 432 0 421.3 0 408C0 394.7 10.75 384 24 384H424C437.3 384 448 394.7 448 408C448 421.3 437.3 432 424 432z"/>
        </svg>
    )
}
