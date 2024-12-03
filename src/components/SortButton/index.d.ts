export declare const SortWrapper: import('styled-components/dist/types').IStyledComponentBase<
  'web',
  import('styled-components').FastOmit<
    import('react').DetailedHTMLProps<
      import('react').HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    never
  >
> &
  string
interface SortButtonProps {
  sortType: 'alphabetical' | 'date_display'
  setSortType: React.Dispatch<React.SetStateAction<'alphabetical' | 'date_display'>>
}
declare const SortButton: React.FC<SortButtonProps>
export default SortButton
