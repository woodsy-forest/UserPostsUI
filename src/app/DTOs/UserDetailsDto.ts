import { AddressDto } from "./AddressDto";
import { CompanyDto } from './CompanyDto';
import { PostDto} from './PostDto';

export class UserDetailsDto {
    public Id: number;
    public Name: string;
    public UserName: string;
    public Email: string;
    public Address: AddressDto;
    public Phone: string;
    public Website: string;
    public Company: CompanyDto;
    public Post: PostDto[];
}
