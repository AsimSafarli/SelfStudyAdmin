import { ITextArea } from './form.interface'
import clsx from 'clsx'
import { forwardRef } from 'react'



export const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
	({ placeholder, error, style, inputStyle, ...rest }, ref) => {
		return (
			<div className="mb-6 w-full">
				<label>
					<div className='text-lg font-medium mb-4 mt-[21px]'>{placeholder}</div>
					<textarea
						placeholder={placeholder}
						className={clsx(
							inputStyle,
							'w-full h-36 sm:h-64 px-4 py-6 border rounded-md border-[#793a3a] text-base resize-none'
						)}
						ref={ref}
						{...rest}
					/>
				</label>
			</div>
		)
	}
)

TextArea.displayName = 'TextArea'