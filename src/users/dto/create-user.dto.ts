import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        default: 'artur@gmail.com'
    })
    email: string

    @ApiProperty({
        default: 'Artur Bachynskiy'
    })
    fullName: string

    @ApiProperty({
        default: 'password'
    })
    password: string

}
