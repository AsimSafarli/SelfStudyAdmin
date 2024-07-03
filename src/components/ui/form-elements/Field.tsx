import { forwardRef } from 'react'
import { IField } from './form.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	({ inputLabel, placeholder, error, type = 'text', style, ...rest }, ref) => {

	
		return (
			<div className='w-[588px] mb-[20px]' style={style}>
				<label>
					<span className='text-lg block font-medium text-black mb-4'>{inputLabel}</span>
					<input
						className='w-full px-3 h-[52px] border border-solid border-[#CBCBCB] bg-transparent rounded-md text-[#A7A7A7]'
						ref={ref}
						type={type}
           				placeholder={placeholder}
						{...rest}
					/>
				</label>
		
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field