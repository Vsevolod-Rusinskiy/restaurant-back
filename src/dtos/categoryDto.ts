import { IsString, Length, IsOptional } from 'class-validator'

export class CreateCategoryDto {
    @IsString()
    @Length(3, 50)
    name!: string
}

export class UpdateCategoryDto {
    @IsString()
    @Length(3, 50)
    @IsOptional()
    name?: string
}
