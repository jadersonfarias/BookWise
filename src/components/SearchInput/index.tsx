import { MagnifyingGlass } from '@phosphor-icons/react'
import { Input, SearchContainer, Svg } from './style.css'
import { forwardRef, InputHTMLAttributes } from 'react'

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
    (props, ref) => {
      return (
        <div className={SearchContainer}>
          <input ref={ref} {...props} className={Input} />
          <MagnifyingGlass size={20} className={Svg}/>
        </div>
      );
    }
  );
  
  // Definindo o displayName para evitar warnings
  SearchInput.displayName = 'SearchInput';
  
  export { SearchInput };